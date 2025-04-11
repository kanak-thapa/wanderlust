import java.util.Arrays;

class test1 {
    public static void main(String[] args){
        int[] digits = {1, 2, 3};
        System.out.println(Arrays.toString(digits));
    } 
    public static int[] plusOne(int[] digits) {
        for(int i = digits.length-1; i>=0; i--){
            if(digits[i]==9){
                digits[i] = 0;
            }
            else{
                digits[i]++;
                return digits;
            }
        }
        digits = new int[digits.length+1];
        digits[0] = 1;
        return digits;
    }
}