export default function bs_list(haystack: number[], needle: number): boolean {
  // tem um ponto alto e um ponto baixo
  // pesquisa binaria comeca pela metade da lista

  // se o valor na metade da lista é igual ao valor pesquisado,
  // então retorna true

  // se o valor na metade é maior que o pesquisado, então é necessário
  // calcular a metade novamente. para isso, será necessário redefinir
  // o ponto baixo da lista, fazendo com que a metade passe a ser o ponto
  // baixo

  // haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]

  let lo = 0;
  let hi = haystack.length;

  do {
    /**
     * lo = 0
     * hi = 9
     * 0 + (99 - 0) / 2 = 49.5, com floor fica 49
     */

    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
}
