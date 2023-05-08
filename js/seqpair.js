function generatePair() {
    
    var dnapair = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };
    var sequence = document.getElementById("dna-seq").value;
    sequence = sequence.toUpperCase();
    sequence = sequence.split("");
    pairsequence= sequence.map(function (nucleotide) {
        if (nucleotide in dnapair) {
            return dnapair[nucleotide];
        }
    });
    pairsequence = pairsequence.join("");
    document.getElementById("result").value = pairsequence;
}