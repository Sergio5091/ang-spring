package com.sergio.ecommerce.repository;

import com.sergio.ecommerce.entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan, Long> {
}
