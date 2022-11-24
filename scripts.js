const container = document.querySelector("#container");
const flexSelect = document.querySelector("#flex-select");
const flexWrapSelect = document.querySelector("#flex-wrap-select");
let flexVal = flexSelect.value;
let flexWrapVal = flexWrapSelect.value;

const changeFlex = () =>{
    flexVal = flexSelect.value;
    console.log(flexVal);
    updateFlexProps(flexVal, flexWrapVal);
}

const changeFlexWrap = () =>{
    flexWrapVal = flexWrapSelect.value;
    console.log(flexWrapVal);
    updateFlexProps(flexVal, flexWrapVal);

}

const updateFlexProps = (fv, fwv) => {
    container.classList = fv + " " + fwv;
}

window.onload = () =>{
    console.log(flexVal)
    console.log(flexWrapVal)
    updateFlexProps(flexVal, flexWrapVal);
}



