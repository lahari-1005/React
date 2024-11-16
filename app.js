const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hi I am in h1 tag"),
            React.createElement("h2",{},"Hii am in h2 tag")
            ]),
            React.createElement("div",{id:"child 2"},[
                React.createElement("h1",{},"Hi I am in h1 tag"),
                    React.createElement("h2",{},"Hii am in h2 tag")
                    ]),
        ]);




console.log("parent");
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);