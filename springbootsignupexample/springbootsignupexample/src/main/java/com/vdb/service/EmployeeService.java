package com.vdb.service;

import com.vdb.entity.Employee;
import com.vdb.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public Employee signUp(Employee employee)
    {
        return employeeRepository.save(employee);
    }
}
