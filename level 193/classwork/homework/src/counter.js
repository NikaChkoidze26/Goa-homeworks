import { UseState } from "react";
//1
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>
                Count: {count}
            </h1>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>

            <button onClick={() => setCount(count - 1)}>
                -
            </button>

        </div>
    )
}

//2

    function titleChanger() {
        const [count, setCount] = useStat(0);

        useEffect(() => {
            document.title = "the count is" + count;
        
        })

        return (

            <div>
                <h1>{count}</h1>

                <button onClick={() => setCount(count + 1)}> ++</button>
            </div>
        )
            
        


    }

    function Image() {
        reutrn (
            <div>
                <h1>goa best</h1>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezi6j-e_XsHOGC2Gqiv1M3S4tn7amKZBEQA&s" alt="goa"></img>
            </div>
        )
    }

    function Image2() {
        reutrn (
            <div>
                <h1>dzagli</h1>

                <img src="https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80" alt="sayvareli dzagli"></img>
            </div>
        )
    }
