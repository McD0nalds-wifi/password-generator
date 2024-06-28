export const routes = {
    home: {
        getRoute: () => '/',
    },
    workout: {
        getRoute: (id: string) => `/workouts/${id}`,
    },
    workouts: {
        getRoute: () => '/workouts',
    },
} as const
