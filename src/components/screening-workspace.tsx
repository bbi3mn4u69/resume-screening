"use client";

import {
  AlertTriangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BriefcaseBusinessIcon,
  CheckCircle2Icon,
  Clock3Icon,
  DatabaseIcon,
  EyeIcon,
  FileTextIcon,
  GaugeIcon,
  HistoryIcon,
  ListFilterIcon,
  LoaderCircleIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

import {
  CategoryDistributionChart,
  ScreeningAnalytics,
} from "~/components/d3-charts";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Progress, ProgressLabel } from "~/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";
import { createResumeDocument } from "~/lib/resume-document";
import { api, type RouterOutputs } from "~/trpc/react";

type Run = NonNullable<RouterOutputs["screening"]["run"]>;
type Evaluation = Run["evaluations"][number];
type ResumeDetail = RouterOutputs["screening"]["resumeDetail"];

const labelItems = [
  { value: "ALL", label: "All matches" },
  { value: "HIGH_MATCH", label: "High match" },
  { value: "MODERATE_MATCH", label: "Moderate match" },
  { value: "LOW_MATCH", label: "Low match" },
  { value: "NOT_RELEVANT", label: "Not relevant" },
];

const labelText: Record<string, string> = {
  HIGH_MATCH: "High match",
  MODERATE_MATCH: "Moderate match",
  LOW_MATCH: "Low match",
  NOT_RELEVANT: "Not relevant",
};

function MatchBadge({ label }: { label: string | null }) {
  if (!label) return <Badge variant="outline">Needs retry</Badge>;
  const variant =
    label === "HIGH_MATCH"
      ? "default"
      : label === "MODERATE_MATCH"
        ? "secondary"
        : label === "NOT_RELEVANT"
          ? "destructive"
          : "outline";
  return <Badge variant={variant}>{labelText[label]}</Badge>;
}

function formatConfidence(value: number | null) {
  return value === null ? "Unavailable" : `${Math.round(value * 100)}%`;
}

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(value);
}

function estimateTokens(characters: number) {
  return Math.ceil(characters / 4);
}

function PreparationProgress({
  corpusSize,
  category,
  categorySize,
}: {
  corpusSize: number;
  category: string | null;
  categorySize: number;
}) {
  return (
    <Card className="border-primary/20">
      <CardContent className="flex items-center gap-4 py-5">
        <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
          <LoaderCircleIcon className="size-5 animate-spin" />
        </div>
        <div>
          <p className="font-medium">Preparing a token-efficient shortlist</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Extracting job requirements, narrowing {corpusSize.toLocaleString()}{" "}
            resumes
            {category ? ` to ${categorySize.toLocaleString()} ${category}` : ""}
            , then ranking evidence locally.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function RunProgress({ run }: { run: Run }) {
  const percent =
    run.totalCandidates === 0
      ? 0
      : Math.round((run.processedCount / run.totalCandidates) * 100);

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <LoaderCircleIcon className="size-4 animate-spin" />
              Groq screening in progress
            </CardTitle>
            <CardDescription className="mt-1">
              Local filtering and evidence compression are complete. Groq is
              reviewing only the reduced shortlist.
            </CardDescription>
          </div>
          <Badge variant="outline">{percent}%</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-5">
        <Progress value={percent}>
          <ProgressLabel>Candidate evaluations</ProgressLabel>
          <span className="text-muted-foreground ml-auto text-sm tabular-nums">
            {run.processedCount}/{run.totalCandidates}
          </span>
        </Progress>
        <div className="grid overflow-hidden rounded-lg border sm:grid-cols-4">
          <div className="border-b p-4 sm:border-r sm:border-b-0">
            <p className="text-muted-foreground text-xs font-medium uppercase">
              Dataset
            </p>
            <p className="mt-1 font-mono text-xl font-semibold">
              {run.datasetCandidates.toLocaleString()}
            </p>
          </div>
          <div className="border-b p-4 sm:border-r sm:border-b-0">
            <p className="text-muted-foreground text-xs font-medium uppercase">
              Job-type pool
            </p>
            <p className="mt-1 font-mono text-xl font-semibold">
              {run.sourceCandidates.toLocaleString()}
            </p>
          </div>
          <div className="border-b p-4 sm:border-r sm:border-b-0">
            <p className="text-muted-foreground text-xs font-medium uppercase">
              Sent to Groq
            </p>
            <p className="mt-1 font-mono text-xl font-semibold">
              {run.totalCandidates.toLocaleString()}
            </p>
          </div>
          <div className="p-4">
            <p className="text-muted-foreground text-xs font-medium uppercase">
              Input reduced
            </p>
            <p className="mt-1 font-mono text-xl font-semibold">
              {run.inputReductionPercent}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function EvidenceSections({ evaluation }: { evaluation: Evaluation }) {
  const sections: Array<{
    heading: string;
    items: string[];
    Icon: LucideIcon;
  }> = [
    {
      heading: "Matched requirements",
      items: evaluation.matchedRequirements,
      Icon: CheckCircle2Icon,
    },
    {
      heading: "Evidence gaps",
      items: evaluation.missingRequirements,
      Icon: AlertTriangleIcon,
    },
    {
      heading: "Supporting evidence",
      items: evaluation.supportingEvidence,
      Icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="grid gap-4">
      {sections.map(({ heading, items, Icon }) => (
        <section key={heading} className="bg-card rounded-lg border p-4">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Icon className="size-4" />
            {heading}
          </h3>
          <ul className="text-muted-foreground grid gap-2 text-sm leading-6">
            {items.length > 0 ? (
              items.map((item) => <li key={item}>• {item}</li>)
            ) : (
              <li>None recorded</li>
            )}
          </ul>
        </section>
      ))}
    </div>
  );
}

function ResumeViewer({
  open,
  onOpenChange,
  resume,
  evaluation,
  isLoading,
  error,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resume?: ResumeDetail;
  evaluation?: Evaluation;
  isLoading: boolean;
  error?: string;
}) {
  const document = useMemo(
    () => (resume?.resumeHtml ? createResumeDocument(resume.resumeHtml) : null),
    [resume?.resumeHtml],
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full max-w-none gap-0 p-0 sm:max-w-4xl">
        <SheetHeader className="shrink-0 border-b px-6 py-5 pr-14">
          <div className="flex flex-wrap items-center gap-2">
            <SheetTitle className="text-lg">
              {resume ? `Resume ${resume.externalId}` : "Resume application"}
            </SheetTitle>
            {resume && <Badge variant="outline">{resume.category}</Badge>}
            {evaluation && <MatchBadge label={evaluation.matchLabel} />}
          </div>
          <SheetDescription>
            {evaluation
              ? "Review the original application beside the AI screening evidence."
              : "Original application from the base Resume.csv dataset."}
          </SheetDescription>
        </SheetHeader>

        {isLoading ? (
          <div className="grid flex-1 gap-4 p-6">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-full min-h-96 w-full" />
          </div>
        ) : error ? (
          <div className="flex flex-1 items-center justify-center p-8">
            <Alert variant="destructive" className="max-w-lg">
              <AlertTriangleIcon />
              <AlertTitle>Could not load this resume</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </div>
        ) : resume ? (
          <Tabs
            defaultValue="resume"
            className="bg-muted/30 min-h-0 flex-1 gap-0"
          >
            {evaluation && (
              <div className="bg-background shrink-0 border-b px-6">
                <TabsList variant="line">
                  <TabsTrigger value="resume">
                    <FileTextIcon /> Resume
                  </TabsTrigger>
                  <TabsTrigger value="evidence">
                    <ShieldCheckIcon /> Screening evidence
                  </TabsTrigger>
                </TabsList>
              </div>
            )}
            <TabsContent value="resume" className="min-h-0 flex-1">
              {document ? (
                <iframe
                  className="h-full min-h-[calc(100dvh-145px)] w-full bg-white"
                  sandbox=""
                  srcDoc={document}
                  title={`Resume ${resume.externalId}`}
                />
              ) : (
                <ScrollArea className="h-[calc(100dvh-145px)]">
                  <article className="mx-auto my-6 max-w-3xl rounded-lg border bg-white p-8 shadow-sm md:p-12">
                    <pre className="font-sans text-sm leading-7 whitespace-pre-wrap text-slate-800">
                      {resume.rawText}
                    </pre>
                  </article>
                </ScrollArea>
              )}
            </TabsContent>
            {evaluation && (
              <TabsContent value="evidence" className="min-h-0 flex-1">
                <ScrollArea className="h-[calc(100dvh-145px)]">
                  <div className="grid gap-5 p-6">
                    <div className="bg-border grid grid-cols-3 gap-px overflow-hidden rounded-lg border">
                      {[
                        ["Fit score", evaluation.fitScore ?? "—"],
                        ["Confidence", formatConfidence(evaluation.confidence)],
                        ["Pre-screen", evaluation.preScreenScore],
                      ].map(([label, value]) => (
                        <div key={String(label)} className="bg-card p-4">
                          <p className="text-muted-foreground text-xs font-medium uppercase">
                            {label}
                          </p>
                          <p className="mt-1 font-mono text-xl font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-card rounded-lg border p-5">
                      <p className="text-muted-foreground text-sm leading-6">
                        {evaluation.summary ??
                          evaluation.errorMessage ??
                          "No model summary available."}
                      </p>
                    </div>
                    <EvidenceSections evaluation={evaluation} />
                  </div>
                </ScrollArea>
              </TabsContent>
            )}
          </Tabs>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

function RunResults({
  run,
  onViewResume,
}: {
  run: Run;
  onViewResume: (evaluation: Evaluation) => void;
}) {
  const [labelFilter, setLabelFilter] = useState("ALL");
  const [sort, setSort] = useState("DESC");
  const [search, setSearch] = useState("");

  const visibleResults = useMemo(
    () =>
      [...run.evaluations]
        .filter(
          (item) => labelFilter === "ALL" || item.matchLabel === labelFilter,
        )
        .filter((item) =>
          item.candidateId.toLowerCase().includes(search.toLowerCase()),
        )
        .sort((a, b) => {
          const difference = (a.fitScore ?? -1) - (b.fitScore ?? -1);
          return sort === "ASC" ? difference : -difference;
        }),
    [labelFilter, run.evaluations, search, sort],
  );

  const counts = Object.fromEntries(
    ["HIGH_MATCH", "MODERATE_MATCH", "LOW_MATCH", "NOT_RELEVANT"].map(
      (label) => [
        label,
        run.evaluations.filter((item) => item.matchLabel === label).length,
      ],
    ),
  );
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader className="gap-3 border-b">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <CardTitle>{run.jobTitle}</CardTitle>
              <CardDescription>
                {formatDate(run.createdAt)} · {run.modelName} · prompt{" "}
                {run.promptVersion}
              </CardDescription>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">
                {run.datasetCategory ?? "All job types"}
              </Badge>
              <Badge
                variant={run.status === "COMPLETED" ? "secondary" : "outline"}
              >
                {run.status.toLowerCase()}
              </Badge>
            </div>
          </div>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-6">
            {run.jobDescription}
          </p>
        </CardHeader>
        <CardContent className="bg-border grid grid-cols-2 gap-px p-0 md:grid-cols-4">
          {[
            ["Reviewed", run.processedCount],
            ["High match", counts.HIGH_MATCH ?? 0],
            ["Moderate", counts.MODERATE_MATCH ?? 0],
            ["Needs attention", run.failedCount],
          ].map(([label, value]) => (
            <div key={String(label)} className="bg-card p-5">
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                {label}
              </p>
              <p className="mt-1 font-mono text-2xl font-semibold">{value}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {run.originalInputCharacters > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GaugeIcon className="size-4" /> Token efficiency
            </CardTitle>
            <CardDescription>
              Deterministic filtering happens before any candidate resume is
              sent to Groq.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid overflow-hidden rounded-lg border md:grid-cols-4">
              <div className="border-b p-5 md:border-r md:border-b-0">
                <p className="text-muted-foreground text-xs font-medium uppercase">
                  Job-type pool
                </p>
                <p className="mt-1 font-mono text-2xl font-semibold">
                  {run.sourceCandidates.toLocaleString()}
                  <span className="text-muted-foreground text-sm font-normal">
                    {" "}
                    / {run.datasetCandidates.toLocaleString()}
                  </span>
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  {(
                    run.datasetCandidates - run.sourceCandidates
                  ).toLocaleString()}{" "}
                  resumes excluded by job type
                </p>
              </div>
              <div className="border-b p-5 md:border-r md:border-b-0">
                <p className="text-muted-foreground text-xs font-medium uppercase">
                  Local shortlist
                </p>
                <p className="mt-1 font-mono text-2xl font-semibold">
                  {run.totalCandidates.toLocaleString()}
                  <span className="text-muted-foreground text-sm font-normal">
                    {" "}
                    / {run.sourceCandidates.toLocaleString()}
                  </span>
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  {(
                    run.sourceCandidates - run.totalCandidates
                  ).toLocaleString()}{" "}
                  resumes excluded locally
                </p>
              </div>
              <div className="border-b p-5 md:border-r md:border-b-0">
                <p className="text-muted-foreground text-xs font-medium uppercase">
                  Approx. resume input
                </p>
                <p className="mt-1 font-mono text-2xl font-semibold">
                  {estimateTokens(run.filteredInputCharacters).toLocaleString()}
                  <span className="text-muted-foreground text-sm font-normal">
                    {" "}
                    tokens
                  </span>
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  From about{" "}
                  {estimateTokens(run.originalInputCharacters).toLocaleString()}{" "}
                  tokens
                </p>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-xs font-medium uppercase">
                  Input reduction
                </p>
                <p className="mt-1 font-mono text-2xl font-semibold">
                  {run.inputReductionPercent}%
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Output is capped at 1,000 tokens per candidate
                </p>
              </div>
            </div>
            <Alert>
              <ListFilterIcon />
              <AlertTitle>Evidence-focused compression</AlertTitle>
              <AlertDescription>
                Groq receives the highest-scoring job-related excerpts, capped
                at 6,000 characters per resume. Review the original application
                before making any decision.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Decision overview</CardTitle>
          <CardDescription>
            Compare Groq&apos;s assessment with the deterministic pre-screen.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScreeningAnalytics data={run.evaluations} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ranked candidates</CardTitle>
          <CardDescription>
            Scores support prioritisation; a person makes every hiring decision.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_190px_190px]">
            <div className="relative">
              <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input
                aria-label="Search screening results"
                className="pl-9"
                placeholder="Search candidate ID"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <Select
              value={labelFilter}
              onValueChange={(value) => setLabelFilter(value ?? "ALL")}
            >
              <SelectTrigger aria-label="Filter by match label">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {labelItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={sort}
              onValueChange={(value) => setSort(value ?? "DESC")}
            >
              <SelectTrigger aria-label="Sort by fit score">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DESC">Score: high to low</SelectItem>
                <SelectItem value="ASC">Score: low to high</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Match</TableHead>
                  <TableHead className="text-right">Fit</TableHead>
                  <TableHead className="text-right">Confidence</TableHead>
                  <TableHead className="w-16" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {visibleResults.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="font-medium">
                        Resume {item.candidateId}
                      </div>
                      {item.needsHumanReview && (
                        <span className="text-muted-foreground text-xs">
                          Human review flagged
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <MatchBadge label={item.matchLabel} />
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {item.fitScore ?? "—"}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatConfidence(item.confidence)}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onViewResume(item)}
                      >
                        <EyeIcon />
                        <span className="sr-only">
                          View resume {item.candidateId}
                        </span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {visibleResults.length === 0 && (
            <p className="text-muted-foreground py-8 text-center text-sm">
              No candidates match these filters.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export function ScreeningWorkspace() {
  const utils = api.useUtils();
  const [tab, setTab] = useState("screen");
  const [selectedRunId, setSelectedRunId] = useState<string>();
  const [activeRunId, setActiveRunId] = useState<string>();
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [screeningCategory, setScreeningCategory] = useState("ALL");
  const [catalogSearch, setCatalogSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [page, setPage] = useState(1);
  const [viewingResume, setViewingResume] = useState<{
    id: string;
    evaluation?: Evaluation;
  }>();

  const config = api.screening.config.useQuery();
  const catalog = api.screening.resumeCatalog.useQuery({
    search: catalogSearch,
    category: category === "ALL" ? null : category,
    page,
  });
  const history = api.screening.history.useQuery();
  const run = api.screening.run.useQuery(
    { id: selectedRunId },
    { refetchInterval: activeRunId ? 1_200 : false },
  );
  const resumeDetail = api.screening.resumeDetail.useQuery(
    { id: viewingResume?.id ?? "" },
    { enabled: Boolean(viewingResume) },
  );
  const screeningCategoryCount =
    screeningCategory === "ALL"
      ? (config.data?.importedCount ?? 0)
      : (catalog.data?.categories.find(
          (item) => item.category === screeningCategory,
        )?.count ?? 0);
  const processRun = api.screening.processRun.useMutation({
    onSettled: async () => {
      setActiveRunId(undefined);
      await Promise.all([
        utils.screening.run.invalidate(),
        utils.screening.history.invalidate(),
      ]);
    },
  });
  const createRun = api.screening.createRun.useMutation({
    onSuccess: async ({ runId }) => {
      setSelectedRunId(runId);
      setActiveRunId(runId);
      await utils.screening.run.invalidate();
      processRun.mutate({ id: runId });
    },
  });

  function analyse(event: FormEvent) {
    event.preventDefault();
    createRun.mutate({
      jobTitle,
      jobDescription,
      datasetCategory: screeningCategory === "ALL" ? null : screeningCategory,
    });
  }

  function viewRun(id: string) {
    setSelectedRunId(id);
    setTab("screen");
  }

  return (
    <main className="bg-background min-h-[100dvh]">
      <header className="bg-card border-b">
        <div className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between gap-6 px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-lg">
              <ShieldCheckIcon />
            </div>
            <div>
              <p className="font-semibold tracking-tight">ClearScreen</p>
              <p className="text-muted-foreground text-xs">
                Evidence-led resume screening
              </p>
            </div>
          </div>
          <Badge variant="outline">Human review required</Badge>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8 md:py-10">
        <div className="mb-8 max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            <DatabaseIcon /> Railway dataset ready
          </Badge>
          <h1 className="text-3xl font-semibold tracking-[-0.035em] md:text-4xl">
            Find the strongest evidence for a real role.
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-7">
            Paste a genuine job advertisement. ClearScreen ranks the fixed
            resume corpus, sends the strongest candidates to Groq, and keeps
            every processed ad available for review.
          </p>
        </div>

        <Tabs
          value={tab}
          onValueChange={(value) => setTab(String(value ?? "screen"))}
        >
          <TabsList variant="line" className="mb-7">
            <TabsTrigger value="screen">
              <SparklesIcon /> Screen resumes
            </TabsTrigger>
            <TabsTrigger value="history">
              <HistoryIcon /> Job history
            </TabsTrigger>
          </TabsList>

          <TabsContent value="screen" className="grid gap-8">
            <div className="grid items-start gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
              <Card className="xl:sticky xl:top-6">
                <CardHeader>
                  <CardTitle>Job advertisement</CardTitle>
                  <CardDescription>
                    Use the complete responsibilities and selection criteria
                    from a real listing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-5" onSubmit={analyse}>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="job-title">Role title</FieldLabel>
                        <Input
                          id="job-title"
                          required
                          minLength={2}
                          maxLength={160}
                          placeholder="e.g. Senior Data Analyst"
                          value={jobTitle}
                          onChange={(event) => setJobTitle(event.target.value)}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="screening-job-type">
                          Resume job type
                        </FieldLabel>
                        <Select
                          value={screeningCategory}
                          onValueChange={(value) =>
                            setScreeningCategory(value ?? "ALL")
                          }
                        >
                          <SelectTrigger
                            id="screening-job-type"
                            className="w-full"
                            aria-label="Filter the screening pool by dataset job type"
                          >
                            <SelectValue>
                              {screeningCategory === "ALL"
                                ? "All job types"
                                : screeningCategory}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="ALL">
                                All job types (
                                {config.data?.importedCount.toLocaleString() ??
                                  "0"}
                                )
                              </SelectItem>
                              {catalog.data?.categories.map((item) => (
                                <SelectItem
                                  key={item.category}
                                  value={item.category}
                                >
                                  {item.category} ({item.count})
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FieldDescription>
                          Filters the database to{" "}
                          {screeningCategoryCount.toLocaleString()} resumes
                          before local ranking or Groq calls.
                        </FieldDescription>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="job-description">
                          Full job ad
                        </FieldLabel>
                        <Textarea
                          id="job-description"
                          required
                          minLength={80}
                          maxLength={30000}
                          className="min-h-56 resize-y"
                          placeholder="Paste the real job description, requirements and responsibilities…"
                          value={jobDescription}
                          onChange={(event) =>
                            setJobDescription(event.target.value)
                          }
                        />
                        <FieldDescription>
                          {jobDescription.length.toLocaleString()} / 30,000
                          characters
                        </FieldDescription>
                      </Field>
                    </FieldGroup>
                    <Alert>
                      <ShieldCheckIcon />
                      <AlertTitle>Decision support only</AlertTitle>
                      <AlertDescription>
                        Sensitive contact details are redacted before model
                        evaluation. Category labels are not sent to Groq.
                      </AlertDescription>
                    </Alert>
                    <Alert>
                      <ListFilterIcon />
                      <AlertTitle>Token-aware screening</AlertTitle>
                      <AlertDescription>
                        The job-type filter runs first. Local relevance ranking
                        then removes zero-evidence resumes, keeps a 10-candidate
                        review floor, and sends at most 6,000 relevant
                        characters per selected resume.
                      </AlertDescription>
                    </Alert>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={
                        createRun.isPending ||
                        processRun.isPending ||
                        !config.data?.configured ||
                        (config.data?.importedCount ?? 0) === 0
                      }
                    >
                      {createRun.isPending ? (
                        <>
                          <LoaderCircleIcon className="animate-spin" />{" "}
                          Filtering resumes…
                        </>
                      ) : processRun.isPending ? (
                        <>
                          <LoaderCircleIcon className="animate-spin" /> Groq
                          screening…
                        </>
                      ) : (
                        <>
                          <SparklesIcon /> Filter and screen candidates
                        </>
                      )}
                    </Button>
                    {(createRun.error ?? processRun.error) && (
                      <p className="text-destructive text-sm">
                        {(createRun.error ?? processRun.error)?.message}
                      </p>
                    )}
                    {!config.isLoading && !config.data?.configured && (
                      <p className="text-destructive text-sm">
                        Add GROQ_API_KEY to enable screening.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <CardTitle>Base resume library</CardTitle>
                      <CardDescription>
                        {(config.data?.importedCount ?? 0).toLocaleString()}{" "}
                        stored resumes · browse-only source corpus
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">Resume.csv</Badge>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-6">
                  {catalog.isLoading ? (
                    <Skeleton className="h-72 w-full" />
                  ) : (
                    <CategoryDistributionChart
                      data={catalog.data?.categories ?? []}
                    />
                  )}
                  <Separator />
                  <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_240px]">
                    <div className="relative">
                      <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                      <Input
                        className="pl-9"
                        placeholder="Search resume ID or text"
                        value={catalogSearch}
                        onChange={(event) => {
                          setCatalogSearch(event.target.value);
                          setPage(1);
                        }}
                      />
                    </div>
                    <Select
                      value={category}
                      onValueChange={(value) => {
                        setCategory(value ?? "ALL");
                        setPage(1);
                      }}
                    >
                      <SelectTrigger aria-label="Filter resumes by category">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ALL">All categories</SelectItem>
                        {catalog.data?.categories.map((item) => (
                          <SelectItem key={item.category} value={item.category}>
                            {item.category} ({item.count})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    {catalog.data?.resumes.map((resume) => (
                      <button
                        type="button"
                        key={resume.id}
                        className="group hover:bg-muted/40 focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-lg border p-4 text-left transition-colors focus-visible:ring-3 focus-visible:outline-none"
                        onClick={() => setViewingResume({ id: resume.id })}
                      >
                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                          <p className="font-medium">
                            Resume {resume.externalId}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{resume.category}</Badge>
                            <EyeIcon className="text-muted-foreground group-hover:text-foreground size-4 transition-colors" />
                          </div>
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-6">
                          {resume.preview}
                        </p>
                      </button>
                    ))}
                    {!catalog.isLoading &&
                      catalog.data?.resumes.length === 0 && (
                        <p className="text-muted-foreground py-10 text-center text-sm">
                          No resumes match this search.
                        </p>
                      )}
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-muted-foreground text-sm">
                      Page {catalog.data?.page ?? page} of{" "}
                      {catalog.data?.pageCount ?? 1} ·{" "}
                      {catalog.data?.total.toLocaleString() ?? 0} results
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={page <= 1}
                        onClick={() => setPage((value) => value - 1)}
                      >
                        <ArrowLeftIcon /> Previous
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={page >= (catalog.data?.pageCount ?? 1)}
                        onClick={() => setPage((value) => value + 1)}
                      >
                        Next <ArrowRightIcon />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {createRun.isPending ? (
              <PreparationProgress
                corpusSize={config.data?.importedCount ?? 0}
                category={
                  screeningCategory === "ALL" ? null : screeningCategory
                }
                categorySize={screeningCategoryCount}
              />
            ) : run.isLoading ? (
              <Skeleton className="h-96 w-full" />
            ) : run.data?.status === "PROCESSING" ? (
              <RunProgress run={run.data} />
            ) : run.data ? (
              <RunResults
                key={run.data.id}
                run={run.data}
                onViewResume={(evaluation) =>
                  setViewingResume({
                    id: evaluation.resumeId,
                    evaluation,
                  })
                }
              />
            ) : (
              <Card className="border-dashed">
                <CardContent className="flex min-h-52 flex-col items-center justify-center text-center">
                  <BriefcaseBusinessIcon className="text-muted-foreground mb-4 size-8" />
                  <p className="font-medium">No screening run selected</p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Submit a job ad or open a previous run from history.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Processed job ads</CardTitle>
                <CardDescription>
                  Reopen earlier evidence and rankings without running Groq
                  again.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {history.isLoading &&
                  Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={index} className="h-28 w-full" />
                  ))}
                {history.data?.map((item) => (
                  <article
                    key={item.id}
                    className="grid gap-4 rounded-lg border p-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"
                  >
                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h2 className="font-semibold">{item.jobTitle}</h2>
                        <Badge variant="secondary">
                          {item.datasetCategory ?? "All job types"}
                        </Badge>
                        <Badge variant="outline">
                          {item.status.toLowerCase()}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-6">
                        {item.jobDescription}
                      </p>
                      <div className="text-muted-foreground mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs">
                        <span className="flex items-center gap-1">
                          <Clock3Icon className="size-3.5" />
                          {formatDate(item.createdAt)}
                        </span>
                        <span>
                          {item.processedCount}/{item.totalCandidates} reviewed
                        </span>
                        <span>{item.highMatches} high matches</span>
                        <span>Average {item.averageScore ?? "—"}</span>
                      </div>
                    </div>
                    <Button variant="outline" onClick={() => viewRun(item.id)}>
                      <EyeIcon /> View results
                    </Button>
                  </article>
                ))}
                {!history.isLoading && history.data?.length === 0 && (
                  <div className="flex min-h-60 flex-col items-center justify-center text-center">
                    <HistoryIcon className="text-muted-foreground mb-4 size-8" />
                    <p className="font-medium">No processed job ads yet</p>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Your completed screening runs will appear here.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <ResumeViewer
        open={Boolean(viewingResume)}
        onOpenChange={(open) => {
          if (!open) setViewingResume(undefined);
        }}
        resume={resumeDetail.data}
        evaluation={viewingResume?.evaluation}
        isLoading={resumeDetail.isLoading}
        error={resumeDetail.error?.message}
      />
    </main>
  );
}
