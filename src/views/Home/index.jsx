import "./styles.css";

import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { useCounterContext } from "../../contexts/CounterContext";

export const Home = () => {
    const [, actions] = useCounterContext();

    return (
        <section className="container">
            <Heading />
            <Button onButtonClick={actions.increase}>INCREASE</Button>
        </section>
    );
};
