import "./styles.css";

import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { useCounterContext } from "../../contexts/CounterContext";

export const Home = () => {
    const [state, actions] = useCounterContext();

    const handleError = () => {
        actions
            .asyncError()
            .then((response) => console.log(response))
            .catch((error) => console.log(error.name, ":", error.message));
    };

    return (
        <section className="container">
            <Heading />
            <Button onButtonClick={actions.increase} disabled={state.loading}>
                INCREASE
            </Button>
            <Button onButtonClick={actions.decrease} disabled={state.loading}>
                DECREASE
            </Button>
            <Button onButtonClick={actions.reset} disabled={state.loading}>
                RESET
            </Button>
            <Button onButtonClick={() => actions.setCounter({ counter: 999 })} disabled={state.loading}>
                SET COUNTER
            </Button>
            <Button onButtonClick={actions.asyncIncrease} disabled={state.loading}>
                ASYNC INCREASE
            </Button>
            <Button onButtonClick={handleError} disabled={state.loading}>
                ASYNC ERROR
            </Button>
        </section>
    );
};
