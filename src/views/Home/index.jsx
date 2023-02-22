import "./styles.css";

import { useCounterContext } from "../../contexts/CounterContext";

export const Home = () => {
    const [state, dispatch] = useCounterContext();

    console.log(state);
    return (
        <section className="container">
            <h1>oi</h1>
        </section>
    );
};
