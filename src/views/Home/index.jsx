import "./styles.css";

import { useCounterContext } from "../../contexts/CounterContext";

export const Home = () => {
    const [state, dispatch] = useCounterContext();
    const { counter } = state;
    const {
        current: { increase },
    } = dispatch;

    return (
        // useEffect(() => {}, [state]);
        <section className="container">
            <h1>{counter}</h1>
            <button onClick={() => increase(dispatch)}>INCREASE</button>
        </section>
    );
};
