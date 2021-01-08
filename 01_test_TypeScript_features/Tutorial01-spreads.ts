function PrintInstruments(log : string, ...instruments : string[]) : void {
    console.log(log);
    // or add them to an Array , starting from the 1 item
    instruments.forEach(instrument => {
        console.log(instrument);
    });
}
PrintInstruments('Music Shop Inventory', 'Guitar', 'Drums', 'Clarinet', 'Clavinova');