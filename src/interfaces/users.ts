export interface UserProps {
    id: string;
    name: string;
    email: string;
    password: string | null;
    role: string;
    favorites: FavoriteProps[];
}

export interface FavoriteProps {
    id: string;
    name: string;
    releaseDate: string;
    posterUrl: string;
}