import { z } from "zod";


import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const itemRouter = createTRPCRouter({
  additem: publicProcedure
   .input(
    z.object({ 
      name: z.string(),
    }),
   )
   .mutation(async({ ctx, input })=> {
    try{ 
      await ctx.prisma.shoppingItem.create({
        data:{
          name,
          
        },
      });
    } catch(error){
      console.log(error);
    }
   })
})

//  .mutation(async ({ input, ctx }) => {
  //     const { name }= input
  //     await ctx.prisma.shoppingItem.create({
  //       data:{
  //         name,
  //         checked: false
  //       },
  //   },
  //   )}

// export const exampleRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),

//   getAll: publicProcedure.query(({ ctx }) => {
//     return ctx.prisma.example.findMany();
//   }),

//   getSecretMessage: protectedProcedure.query(() => {
//     return "you can now see this secret message!";
//   }),
// })