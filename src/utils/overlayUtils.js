export const getOverlayStyles = (build) => {
    const styles = {
        lean: { top: "90px", left: "70px", width: "112px", height: "112px", textTop: "130px", fontSize: "18px" },
        regular: { top: "100px", left: "60px", width: "128px", height: "128px", textTop: "140px", fontSize: "20px" },
        athletic: { top: "95px", left: "55px", width: "136px", height: "136px", textTop: "145px", fontSize: "22px" },
        big: { top: "90px", left: "50px", width: "144px", height: "144px", textTop: "150px", fontSize: "24px" },
    };
    return styles[build] || styles.regular;
};
