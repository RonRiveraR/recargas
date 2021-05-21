<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MensajesMonto extends Mailable
{
    use Queueable, SerializesModels;

    public $subject = "Estado de la Recarga";

    public $datosRecarga;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($datosRecarga)
    {
        $this->datosRecarga = $datosRecarga;
    }
    

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.monto');
    }
}
