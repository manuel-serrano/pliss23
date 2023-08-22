.L3:
        addq    (%rdi), %rax
        addq    $8, %rdi
        cmpq    %rdx, %rdi
        jne     .L3
