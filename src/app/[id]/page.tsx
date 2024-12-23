
const DynamicBook = async (props: any) => {
    console.log(props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)
    const response = await url.json()
    console.log("Single Title", response)
    return (
        <h1 className="text-3xl">
            Dynammic Route <br /> <br />
            {response.title}
        </h1>
    )
}
export default DynamicBook;
