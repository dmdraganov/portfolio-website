export type AnalyticsEvent =
  | Readonly<{ name: 'hero_telegram' | 'footer_telegram' }>
  | Readonly<{ name: 'email' | 'kwork' | 'github_profile' }>
  | Readonly<{
      name: 'project_demo' | 'project_repository' | 'home_project_entry';
      project: string;
    }>
  | Readonly<{
      name: 'all_projects_return' | 'next_project_navigation';
      project?: string;
    }>;

type YandexMetrica = {
  (
    counterId: number,
    command: 'reachGoal',
    goal: string,
    parameters?: Record<string, string>
  ): void;
  (
    counterId: number,
    command: 'hit',
    path: string,
    options?: Readonly<{ referer?: string }>
  ): void;
};

declare global {
  interface Window {
    ym?: YandexMetrica;
  }
}

function goalFor(event: AnalyticsEvent): string {
  return event.name;
}

function parametersFor(
  event: AnalyticsEvent
): Record<string, string> | undefined {
  return 'project' in event && event.project !== undefined
    ? { project: event.project }
    : undefined;
}

function getCounterId(): number | null {
  const value = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;

  return value === undefined || value === '' ? null : Number(value);
}

export const analytics = Object.freeze({
  track(event: AnalyticsEvent): void {
    const counterId = getCounterId();

    if (
      counterId === null ||
      typeof window === 'undefined' ||
      window.ym === undefined
    ) {
      return;
    }

    try {
      window.ym(counterId, 'reachGoal', goalFor(event), parametersFor(event));
    } catch {
      // Analytics is optional: failed vendor calls must never affect navigation.
    }
  },

  pageView(path: string, previousUrl?: string): void {
    const counterId = getCounterId();

    if (
      counterId === null ||
      typeof window === 'undefined' ||
      window.ym === undefined
    ) {
      return;
    }

    try {
      window.ym(
        counterId,
        'hit',
        path,
        previousUrl === undefined ? undefined : { referer: previousUrl }
      );
    } catch {
      // Analytics is optional: failed vendor calls must never affect navigation.
    }
  },
});
