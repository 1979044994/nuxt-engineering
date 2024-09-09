let count = 1;
export default defineEventHandler(async (event) => {
  count++;
  console.log(`count=${count}`);
  return { name: '小李', age: 18 };
});
