funcall:
        subq    $8, %rsp
        movl    $2, %esi
        movl    $1, %edi
        call    f@PLT
        addq    $8, %rsp
        addq    $3, %rax
        ret
