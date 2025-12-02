/**
 * unknown 타입
 */
function unknownExam() {
    let a = 1;
    let b = "string";
    let c = true;
    let d = null;
    let e = undefined;
    let unknownVar;
    //   let num:number = unknownVar;
    //   let str: string = unknownVar;
    //   let bool: boolean = unknownVar
}
/**
 * Never 타입
 */
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    //   let never1: never = 1;
    //   let never2: never = "string";
    //   let never3: never = true;
}
/**
 * void 타입
 */
function voidExam() {
    function voidFunc() {
        console.log("hi");
    }
    let voidVar = undefined;
}
/**
 * any 타입 - 모든 타입의 super / sub(never만빼고) 타입
 */
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    anyVar = unknownVar;
    unknownVar = anyVar;
    undefinedVar = anyVar;
    //   neverVar = anyVar;
}
export {};
