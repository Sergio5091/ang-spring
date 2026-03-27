package com.sergio.ecommerce.repository;

import com.sergio.ecommerce.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}