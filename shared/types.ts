import { genres } from "./config";

export type genreInput = keyof typeof genres;

export type genreType = {
    displayValue: string,
    searchValue: string
}