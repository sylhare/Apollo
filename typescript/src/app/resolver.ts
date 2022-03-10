import { getProductById, getProducts } from '../resolvers/query/productQueries'
import { getAllBooks, getBook, lotr } from '../resolvers/query/Books'
import { example } from '../resolvers/query/example'
import { exampleMutation } from '../resolvers/mutations/exampleMutation'
import { movie } from '../resolvers/query/Movie'
import { director } from '../resolvers/movie/director'
import { actors } from '../resolvers/movie/actors'
import { movies } from '../resolvers/moviePerson/movies'
import { scenes } from '../resolvers/movie/scenes'
import { OddScalar } from '../resolvers/scalar/OddScalar'
import { addBook } from '../resolvers/mutations/addBook/addBook'
import { createProduct } from '../resolvers/mutations/stacked/createProduct';
import { productCreation } from '../resolvers/mutations/productCreation';
import { ProductInput } from '../models/ProductReference';
import { setProductDescription } from '../resolvers/mutations/stacked/setProductDescription';
import { setProductName } from '../resolvers/mutations/stacked/setProductName';

const resolvers = {
    Query: {
        getAllUsers: async (_: any, args: any) => ([{ name: 'xyz' }, { name: 'abc' }]),
        example,
        movie,
        products: async () => getProducts(),
        product: async (_: any, { id }: { id: number }) => getProductById({ productId: id }),
        allBooks: async () => getAllBooks(),
        book: async (parent: any, { title }: { title: string }) => getBook(title),
        lotr: async () => lotr()
    },
    Movie: {
        director,
        actors,
        scenes,
    },
    MoviePerson: {
        movies
    },
    Mutation: {
        productCreation: async (_: any, { product }: { product: ProductInput }) => productCreation(product),
        createProduct,
        setProductName,
        setProductDescription,
        exampleMutation,
        addBook
    },
    Odd: OddScalar
}

export default resolvers
