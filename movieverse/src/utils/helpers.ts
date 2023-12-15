import { MoviesFromMovieverse } from "~/types/movies";
import { User } from "~/types/users";

const SPECIAL_MOVIE_AMOUNT = 10;
const SPECIAL_OCCURENCE_AMOUNT = 10;

const isNumber = (text: string) => {
    const isNum = !isNaN(parseInt(text));
    return isNum
}

const isFavorited = (title: string, user: User, moviesFromDb: MoviesFromMovieverse[]) => {
    return moviesFromDb.some(movie => movie.title === title && movie.favorited_from.includes(user.id!));
}

const getUserGenreMap = (user: User) => {
    const favoriteGenres = user.favoriteGenres;
    const userGenreMap = favoriteGenres.reduce((pre, curr) => {
        if (pre.some(item => item.genre === curr)) {
            const index = pre.findIndex(item => item.genre === curr);
            const incGenre = pre[index]
            incGenre.occurence += 1;
            return pre
        } else {
            return [...pre, { genre: curr, occurence: 1 }]
        }
    }, [] as { genre: number, occurence: number }[])

    const filteredGenreMap = userGenreMap.filter(item => item.occurence > SPECIAL_OCCURENCE_AMOUNT);

    const totalOccurency = filteredGenreMap.reduce((total, item) => total + item.occurence, 0);

    const result = filteredGenreMap.map((item) => {
        const percentage = (item.occurence / totalOccurency) * 100;
        return { ...item, percentage: Math.round(percentage) }
    });

    return result.sort((a, b) => b.percentage - a.percentage);
}

const userSpecialMovieDistribution = (genreMap: { genre: number, occurence: number, percentage: number }[]) => {
    const moviesFrom = genreMap.map((item) => {
        const calculatedAmount = (item.percentage * SPECIAL_MOVIE_AMOUNT) / 100;
        return { genre: item.genre, amount: Math.round(calculatedAmount) }
    })
    return moviesFrom
}
export { isNumber, isFavorited, getUserGenreMap, userSpecialMovieDistribution }