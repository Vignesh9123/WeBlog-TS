
import React, { useEffect, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { PiInfo } from 'react-icons/pi';

export default function ConfirmDialogUI({message}:any) {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info',contentClassName: 'flex gap-2 items-center py-5 px-7', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', contentClassName: 'flex gap-2 items-center py-5 px-7',summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm2 = () => {
        confirmDialog({
            message,
            header: 'Delete Confirmation',
            icon: <PiInfo/>,
            defaultFocus: 'reject',
            acceptClassName: 'bg-red-400 p-2 px-3 m-2',
            contentClassName:"p-2 gap-2",
            headerClassName:"p-2",
            rejectClassName:"p-2 px-3 m-2",
            accept,
            reject
        });
    };
    useEffect(() => {
      confirm2()
    }, [])
    
    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog style={{minHeight:"150px",minWidth:"500px"}} />
            
        </>
    )
}
        