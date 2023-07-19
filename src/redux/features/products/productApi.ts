import { productsAPI } from '@/redux/api/apiSlice';

const productApi = productsAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProduct: builder.query({
      query: (id) => '/product/' + id,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: '/comment/' + id,
        method: 'POST',
        body: {
          comment: data,
        },
      }),
      invalidatesTags: ['comment-refetch'],
    }),
    getComments: builder.query({
      query: (id) => '/comment/' + id,
      providesTags: ['comment-refetch'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetProductQuery,
  useGetProductsQuery,
  usePostCommentMutation,
} = productApi;
