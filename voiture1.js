document.addEventListener("DOMContentLoaded", function () {
    const anneeSelect = document.getElementById("annee");
    const kilometrageSelect = document.getElementById("kilometrage");
    const prixSelect = document.getElementById("prix");
    const vehicules = document.querySelectorAll(".vehicule");
  
    function filtrerVehicules() {
      const anneeFiltre = anneeSelect.value;
      const kilometrageFiltre = kilometrageSelect.value;
      const prixFiltre = prixSelect.value;
  
      console.log("Filtre kilometrage;", kilometrageFiltre);
  
      vehicules.forEach(function (vehicule) {
        const anneeVehicule = vehicule.querySelector(".annee").textContent.split(": ")[1];
        const kilometrageVehicule = vehicule.querySelector(".kilometrage").textContent.split(": ")[1].replace(/ /g, ''); // Supprimer les espaces
        const prixFichuVehicule = vehicule.querySelector(".prix").textContent.split(": ")[1].replace("€", "").replace(/ /g, "");
        const prixFichu = parseFloat(prixFichuVehicule);
  
        console.log("Kilométrage du véhicule:", kilometrageVehicule);
  
        const doitAfficher = (anneeFiltre === "toutes" || anneeVehicule === anneeFiltre) &&
          (kilometrageFiltre === "tous" || (kilometrageFiltre === "moins-50000" && parseFloat(kilometrageVehicule) < 50000) ||
            (kilometrageFiltre === "50000-70000" && parseFloat(kilometrageVehicule) >= 50000 && parseFloat(kilometrageVehicule) <= 70000) ||
            (kilometrageFiltre === "70000-100000" && parseFloat(kilometrageVehicule) >= 70000 && parseFloat(kilometrageVehicule) <= 100000) ||
            (kilometrageFiltre === "100000-150000" && parseFloat(kilometrageVehicule) >= 100000 && parseFloat(kilometrageVehicule) <= 150000) ||
            (kilometrageFiltre === "150000-plus" && parseFloat(kilometrageVehicule) >= 150000)) &&
          (prixFiltre === "tous" || (prixFiltre === "1000-plus" && prixFichu >= 1000) ||
            (prixFiltre === "3000-plus" && prixFichu >= 3000) ||
            (prixFiltre === "6000-plus" && prixFichu >= 6000) ||
            (prixFiltre === "10000-plus" && prixFichu >= 10000) ||
            (prixFiltre === "15000-plus" && prixFichu >= 15000));
  
        if (doitAfficher) {
          vehicule.style.display = "block";
        } else {
            vehicule.style.display = "none";
        }
      });
    }
  
    anneeSelect.addEventListener("change", filtrerVehicules);
    kilometrageSelect.addEventListener("change", filtrerVehicules);
    prixSelect.addEventListener("change", filtrerVehicules);
  });
  
  
  

