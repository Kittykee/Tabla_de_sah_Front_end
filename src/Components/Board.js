import images from "../assets/images/images";


export default function tabla_de_sah() {

    function dragStart(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);
    }
    function allowDrop(ev) {
        ev.preventDefault();
    }
    function drop(ev) {
        ev.preventDefault();
        ev.target.appendChild(
            document.getElementById(ev.dataTransfer.getData("Text"))
        );
    }
    
    return (
        <table class="center">

            <tr>
                <td id="vline">8</td>
                <td id="white" name="A8">
                    <img itemID="source" draggable="true" id="im1" src={images.bRook} width="35" height="35"></img>
                </td>
                <td id="black" name="B8">
                    <img itemID="source" draggable="true" id="im1" src={images.bKnight} width="35" height="35"></img>
                </td>
                <td id="white" name="C8">
                    <img itemID="source" draggable="true" id="im1" src={images.bBishop} width="35" height="35"></img>
                </td>
                <td id="black" name="D8">
                    <img itemID="source" draggable="true" id="im1" src={images.bQueen} width="35" height="35"></img>
                </td>
                <td id="white" name="E8">
                    <img itemID="source" draggable="true" id="im1" src={images.bQueen} width="35" height="35"></img>
                </td>
                <td id="black" name="F8">
                    <img itemID="source" draggable="true" id="im1" src={images.bBishop} width="35" height="35"></img>
                </td>
                <td id="white" name="G8">
                    <img itemID="source" draggable="true" id="im1" src={images.bKnight} width="35" height="35"></img>
                </td>
                <td id="black" name="H8">
                    <img itemID="source" draggable="true" id="im1" src={images.bRook} width="35" height="35"></img>
                </td>
            </tr>
            <tr>
                <td id="vline">7</td>
                <td id="black" name="A7">
                    <img itemID="source" onDragStart={dragStart} draggable="true" id="im1" src={images.bPawn} width="35" height="35"></img>
                </td>
                <td id="white" name="B7">
                    <img itemID="source" onDragStart={dragStart} draggable="true" id="im1" src={images.bPawn} width="35" height="35"></img>
                </td>
                <td id="black" name="C7">
                    <img itemID="source" onDragStart={dragStart} draggable="true" id="im1" src={images.bPawn} width="35" height="35"></img>
                </td>
                <td id="white" name="D7">
                    <img itemID="source" onDragStart={dragStart} draggable="true" id="im1" src={images.bPawn} width="35" height="35"></img>
                </td>
                <td id="black" name="E7">
                    <img itemID="source" onDragStart={dragStart} draggable="true" id="im1" src={images.bPawn} width="35" height="35"></img>
                </td>
                <td id="white" name="F7">
                    <img itemID="source" onDragStart={dragStart} draggable="true" id="im1" src={images.bPawn} width="35" height="35"></img>
                </td>
                <td id="black" name="G7">
                    <img itemID="source" onDragStart={dragStart} draggable="true" id="im1" src={images.bPawn} width="35" height="35"></img>
                </td>
                <td id="white" name="H7">
                    <img itemID="source" onDragStart={dragStart} draggable="true" id="im1" src={images.bPawn} width="35" height="35"></img>
                </td>
            </tr>
            <tr>
                <td id="vline">6</td>
                <td id="white" name="A6"></td>
                <td id="black" name="B6"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="C6"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="D6"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="E6"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="F6"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="G6"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="H6"></td>
            </tr>
            <tr>
                <td id="vline">5</td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="A5"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="B5"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="C5"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="D5"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="E5"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="F5"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="G5"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="H5"></td>
            </tr><tr>
                <td id="vline">4</td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="A4"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="B4"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="C4"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="D4"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="E4"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="F4"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="G4"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="H4"></td>
            </tr>
            <tr>
                <td id="vline">3</td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="A3"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="B3"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="C3"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="D3"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="E3"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="F3"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="black" name="G3"></td>
                <td onDrop={drop} onDragOver={allowDrop} id="white" name="H3"></td>
            </tr><tr>
                <td id="vline">2</td>
                <td id="white" name="A2">
                    <img itemID="source" onDragStart={dragStart} draggable="true" id="im1" src={images.wPawn} width="35" height="35"></img>
                </td>
                <td id="black" name="B2">
                    <img itemID="source" onDragStart={dragStart} draggable="true" id="im1" src={images.wPawn} width="35" height="35"></img>
                </td>
                <td id="white" name="C2">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wPawn} width="35" height="35"></img>
                </td>
                <td id="black" name="D2">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wPawn} width="35" height="35"></img>
                </td>
                <td id="white" name="E2">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wPawn} width="35" height="35"></img>
                </td>
                <td id="black" name="F2">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wPawn} width="35" height="35"></img>
                </td>
                <td id="white" name="G2">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wPawn} width="35" height="35"></img>
                </td>
                <td id="black" name="H2">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wPawn} width="35" height="35"></img>
                </td>
            </tr>
            <tr>
                <td id="vline">1</td>
                <td id="black" name="A1">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wRook} width="35" height="35"></img>
                </td>
                <td id="white" name="B1">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wKnight} width="35" height="35"></img>
                </td>
                <td id="black" name="C1">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wBishop} width="35" height="35"></img>
                </td>
                <td id="white" name="D1">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wQueen} width="35" height="35"></img>
                </td>
                <td id="black" name="E1">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wKing} width="35" height="35"></img>
                </td>
                <td id="white" name="F1">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wBishop} width="35" height="35"></img>
                </td>
                <td id="black" name="G1">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wKnight} width="35" height="35"></img>
                </td>
                <td id="white" name="H1">
                    <img onDragStart={dragStart} draggable="true" id="im1" src={images.wRook} width="35" height="35"></img>
                </td>
            </tr>
            <tr>
                <td id="hline"></td>
                <td id="hline">A</td>
                <td id="hline">B</td>
                <td id="hline">C</td>
                <td id="hline">D</td>
                <td id="hline">E</td>
                <td id="hline">F</td>
                <td id="hline">G</td>
                <td id="hline">H</td>
            </tr>
        </table>
    )
}