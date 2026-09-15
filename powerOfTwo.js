function powerTwo(n) { 
    if (n == 1) return true;
    if (n == 0 || n % 2 !== 0) return false;

    return powerTwo(n / 2);
}