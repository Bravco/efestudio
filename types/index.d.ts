declare global {
    type Project = {
        ordering: number,
        slug: string,
        title: string,
        label: string,
        imageUrl?: string | null
    };
}