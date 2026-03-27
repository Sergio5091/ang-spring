package com.sergio.ecommerce.service;

import com.sergio.ecommerce.entity.Loan;
import com.sergio.ecommerce.repository.LoanRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoanService {

    private final LoanRepository loanRepository;

    public LoanService(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    public Loan createLoan(Loan loan) {
        return loanRepository.save(loan);
    }

    public Optional<Loan> getLoanById(Long id) {
        return loanRepository.findById(id);
    }

    public Loan updateLoan(Long id, Loan newLoan) {
        return loanRepository.findById(id).map(loan -> {
            loan.setUser(newLoan.getUser());
            loan.setBook(newLoan.getBook());
            loan.setLoanDate(newLoan.getLoanDate());
            loan.setDueDate(newLoan.getDueDate());
            loan.setReturnDate(newLoan.getReturnDate());
            return loanRepository.save(loan);
        }).orElseThrow(() -> new RuntimeException("Loan not found"));
    }

    public void deleteLoan(Long id) {
        loanRepository.deleteById(id);
    }
}
