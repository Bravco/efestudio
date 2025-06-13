declare global {
    type Project = {
        slug: string,
        title: string,
        label: string,
        imageUrl?: string | null
    };
}