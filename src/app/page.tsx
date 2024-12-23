import Link from "next/link"
export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos")
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        response.map((todo: any) => (
          <div>
            <Link href={`${todo.id}`}>
              <h1 className="text-3xl">
                {todo.title} &nbsp; &nbsp; {todo.id}
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  );
}
