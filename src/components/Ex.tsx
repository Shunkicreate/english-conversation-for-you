interface Props {
    count:number
 }
export const Excomponent = (props: Props) => {
    return (<div><div>count: {props.count}</div></div>)
}