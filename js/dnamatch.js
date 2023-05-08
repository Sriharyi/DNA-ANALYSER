function matchPair() {
    const seq1 = document.getElementById("dna-seq1").value;
    const seq2 = document.getElementById("dna-seq2").value;
    const score = calculateAlignmentScore(seq1, seq2);
    document.getElementById("result").innerHTML = score;
  }
function calculateAlignmentScore(seq1, seq2) {
    const gap_penalty = -1;
    const match_score = 1;
    const mismatch_penalty = -1;
  
    // Initialize the score matrix
    const score_matrix = [];
    for (let i = 0; i <= seq1.length; i++) {
      score_matrix[i] = [i * gap_penalty];
    }
    for (let j = 0; j <= seq2.length; j++) {
      score_matrix[0][j] = j * gap_penalty;
    }
  
    // Fill in the score matrix
    for (let i = 1; i <= seq1.length; i++) {
      for (let j = 1; j <= seq2.length; j++) {
        const score1 = score_matrix[i - 1][j - 1] + (seq1[i - 1] === seq2[j - 1] ? match_score : mismatch_penalty);
        const score2 = score_matrix[i - 1][j] + gap_penalty;
        const score3 = score_matrix[i][j - 1] + gap_penalty;
        score_matrix[i][j] = Math.max(score1, score2, score3);
      }
    }
  
    // Return the alignment score
    return score_matrix[seq1.length][seq2.length];
  }
  