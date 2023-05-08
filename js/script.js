function generateSequence() {
    // Get user inputs
    var size = parseInt(document.getElementById("size").value);
    var gcContent = parseFloat(document.getElementById("gc-content").value);

    // Calculate number of G's and C's in sequence based on GC content
    var gcCount = Math.round(gcContent * size);
    var gCount = Math.round(gcCount / 2);
    var cCount = gcCount - gCount;
    var aCount = Math.round((size - gcCount) / 2);
    var tCount = size - gcCount - aCount;
    // Check if inputs are valid
    if (size < 1 || gcContent < 0 || gcContent > 1) {
        alert("Invalid input(s)");
        return;
    }
    // Check if there are enough G's and C's to make the sequence
    if (gCount < 0 || cCount < 0) {
        alert("Impossible GC content");
        return;
    }
    // Check if there are enough A's and T's to make the sequence
    if (aCount < 0 || tCount < 0) {
        alert("Impossible GC content");
        return;
    }
    // DNA sequence 
    var dna ="ATCG";
    var sequence = "";
    for (let i = 0;i<gCount;i++){
            sequence += "G";
        }
    for (let i = 0;i<cCount;i++){
                sequence +="C";

            }
    for (let i = 0;i<aCount;i++){
        
            sequence +="A";
        }
    for (let i = 0;i<tCount;i++){
        
            sequence +="T";
        }
    // Generate random DNA sequence
    sequence = randomSequence(sequence);
    let gccount = calculateGCContent(sequence);
    sequence += "\nGC Content: " + gccount;
    sequence    +="\nsize: " + sequence.length;
    // Display sequence in text box
    document.getElementById("result").value = sequence;
}
function randomSequence(sequence){
    var seqarr = sequence.split("");
    seqarr.sort(function(){
        return 0.5 - Math.random();
    });
    var randomseq = seqarr.join("");
    return randomseq;
}
function displayvalue()
{
    var x = document.getElementById("gc-content").value;
    document.getElementById("gc-content-value").innerHTML = x;
}

function calculateGCContent(sequence) {
    var gcCount = 0;
    var sequenceLength = sequence.length;
  
    for (var i = 0; i < sequenceLength; i++) {
      var nucleotide = sequence.charAt(i).toUpperCase();
      if (nucleotide == 'G' || nucleotide == 'C') {
        gcCount++;
      }
    }

    var gcContent = gcCount / sequenceLength;
    return gcContent;
  }
  