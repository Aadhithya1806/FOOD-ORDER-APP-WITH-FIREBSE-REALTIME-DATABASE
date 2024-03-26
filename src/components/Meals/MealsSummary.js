import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                A Simple food delivery web-application built using{" "}
                <span className={classes.highlight}>React JS </span> and
                <span className={classes.highlight}> Google Firebase </span>.
            </p>
            <p>
                Choose your favorite meal from our broad selection of available
                meals and enjoy a delicious lunch or dinner at your hostel.
            </p>
        </section>
    );
};

export default MealsSummary;
