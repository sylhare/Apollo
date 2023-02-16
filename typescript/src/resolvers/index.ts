import { getProductById, getProducts } from './query/productQueries'
import { getAllBooks, getBook, lotr } from './query/Books'
import { example } from './query/example'
import { exampleMutation } from './mutations/exampleMutation'
import { movie } from './query/Movie'
import { director } from './movie/director'
import { actors } from './movie/actors'
import { movies } from './moviePerson/movies'
import { scenes } from './movie/scenes'
import { OddScalar } from './scalar/OddScalar'
import { addBook } from './mutations/addBook/addBook'
import { createProduct } from './mutations/stacked/createProduct';
import { productCreation } from './mutations/productCreation';
import { ProductInput } from '../models/ProductReference';
import { setProductDescription } from './mutations/stacked/setProductDescription';
import { setProductName } from './mutations/stacked/setProductName';
import { DateScalar } from "./scalar/DateScalar";
import { vehicles } from './query/vehicles';
import { rims } from './vehicle/rims';
import { tires } from './vehicle/tires';
import { vehicle as TireVehicle } from './vehicle/tire/vehicle';
import { vehicle as RimVehicle } from './vehicle/rim/vehicle';
import { allRims } from './query/allRims';
import { __resolveReference as __resolveVehicleReference } from './vehicle/__resolveReference';
import { __resolveReference as __resolveTireReference } from './vehicle/tire/__resolveReference';

const resolvers = {
    Query: {
        getAllUsers: async (_: any, args: any) => ([{ name: 'xyz' }, { name: 'abc' }]),
        example,
        movie,
        products: async () => getProducts(),
        product: async (_: any, { id }: { id: number }) => getProductById({ productId: id }),
        allBooks: async () => getAllBooks(),
        book: async (parent: any, { title }: { title: string }) => getBook(title),
        lotr: async () => lotr(),
        vehicles,
        allRims,
    },
    Mutation: {
        productCreation: async (_: any, { product }: { product: ProductInput }) => productCreation(product),
        createProduct,
        setProductName,
        setProductDescription,
        exampleMutation,
        addBook
    },
    Movie: {
        director,
        actors,
        scenes,
    },
    MoviePerson: {
        movies
    },
    Vehicle: {
        rims,
        tires,
        __resolveReference: __resolveVehicleReference
    },
    Tire: {
        vehicle: TireVehicle,
        __resolveReference: __resolveTireReference
    },
    Rim: {
        vehicle: RimVehicle
    },
    Odd: OddScalar,
    Date: DateScalar,
}

export default resolvers
