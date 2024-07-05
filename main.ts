namespace IckiSKill{
    //% blockId=IchiBlock
    //% block="Di chuyển về trước với tốc độ $vol"
    //% vol.min=0 vol.max=255
    export function forward(vol:number):void{
        robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            vol,
            robotbit.Motors.M1A,
            vol
        )
    }
}
