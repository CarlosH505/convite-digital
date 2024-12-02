export default function PaginaConvite(props: any) {

    console.log("paginaConvite", props);
    
    return (
    <div>
        <span>{props.params.alias}</span>
    </div>
    );
};