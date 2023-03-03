export interface Movie {
	buy_url: string;
	picture_url: string;
	movie_title: string;
	date: string;
	cache_id: string;
	position?: string;
}

export interface Movies {
	position: string;
	movies: Movie[];
}
