import {
    calculateTotalCost
} from './script.js';

describe('calculateTotalCost', () => {
    // Test the function with valid inputs and outputs
    it('should calculate the total cost with full discount for premium members', () => {
        // Arrange
        const totalPrice = 100;
        const discountPercentage = 20;
        const isPremiumMember = true;
        const expectedTotal = '80.00';

        // Act
        const actualTotal = calculateTotalCost(totalPrice, discountPercentage, isPremiumMember);

        // Assert
        expect(actualTotal).toBe(expectedTotal);
    });

    it('should calculate the total cost with half discount for non-premium members', () => {
        // Arrange
        const totalPrice = 100;
        const discountPercentage = 20;
        const isPremiumMember = false;
        const expectedTotal = '90.00';

        // Act
        const actualTotal = calculateTotalCost(totalPrice, discountPercentage, isPremiumMember);

        // Assert
        expect(actualTotal).toBe(expectedTotal);
    });

    it('should calculate the total cost with no discount', () => {
        // Arrange
        const totalPrice = 100;
        const discountPercentage = 0;
        const isPremiumMember = false;
        const expectedTotal = '100.00';

        // Act
        const actualTotal = calculateTotalCost(totalPrice, discountPercentage, isPremiumMember);

        // Assert
        expect(actualTotal).toBe(expectedTotal);
    });

    // Test the function with invalid inputs and outputs
    it('should return null if the total price is not a number', () => {
        // Arrange
        const totalPrice = 'abc';
        const discountPercentage = 20;
        const isPremiumMember = true;
        const expectedTotal = null;

        // Act
        const actualTotal = calculateTotalCost(totalPrice, discountPercentage, isPremiumMember);

        // Assert
        expect(actualTotal).toBe(expectedTotal);
    });

    it('should return null if the total price is less than or equal to zero', () => {
        // Arrange
        const totalPrice = -10;
        const discountPercentage = 20;
        const isPremiumMember = true;
        const expectedTotal = null;

        // Act
        const actualTotal = calculateTotalCost(totalPrice, discountPercentage, isPremiumMember);

        // Assert
        expect(actualTotal).toBe(expectedTotal);
    });

    it('should return null if the discount percentage is not a number', () => {
        // Arrange
        const totalPrice = 100;
        const discountPercentage = 'abc';
        const isPremiumMember = true;
        const expectedTotal = null;

        // Act
        const actualTotal = calculateTotalCost(totalPrice, discountPercentage, isPremiumMember);

        // Assert
        expect(actualTotal).toBe(expectedTotal);
    });

    it('should return null if the discount percentage is less than zero', () => {
        // Arrange
        const totalPrice = 100;
        const discountPercentage = -10;
        const isPremiumMember = true;
        const expectedTotal = null;

        // Act
        const actualTotal = calculateTotalCost(totalPrice, discountPercentage, isPremiumMember);

        // Assert
        expect(actualTotal).toBe(expectedTotal);
    });

    it('should return null if the discount percentage is greater than 100', () => {
        // Arrange
        const totalPrice = 100;
        const discountPercentage = 110;
        const isPremiumMember = true;
        const expectedTotal = null;

        // Act
        const actualTotal = calculateTotalCost(totalPrice, discountPercentage, isPremiumMember);

        // Assert
        expect(actualTotal).toBe(expectedTotal);
    });
});
