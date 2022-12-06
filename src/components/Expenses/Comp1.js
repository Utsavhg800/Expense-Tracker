const styles = {
    fontWeight: "bold",
    textTransform: "uppercase"
}

function Comp1(data) {
    console.log("Comp1", data);
    return (
        <p style={styles}>{data.name}</p>
    );
}

export default Comp1;