export interface Id {
    kind: string;
    videoId: string;
}

export interface Trailers {
    kind: string;
    etag: string;
    id: Id;
}
