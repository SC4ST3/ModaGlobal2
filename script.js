function afegirContacte(nom) {
    if (!nom || nom.trim() === "") {
        console.log("No es pot afegir un contacte en blanc");
        alert("El nom del contacte no pot estar en blanc.");
        return;
    }

    console.log("Contacte afegit: " + nom);
}
