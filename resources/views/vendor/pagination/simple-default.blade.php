@if ($paginator->hasPages())
    <nav class="mt-2">
        <ul class="pagination">
            {{-- Previous Page Link --}}
            @if ($paginator->onFirstPage())
                <li class="btn btn-secondary disabled mx-1" aria-disabled="true"><span>Anterior</span></li>
            @else
                <li class="btn btn-outline-secondary mx-1"><a class="text-secondary text-decoration-none" href="{{ $paginator->previousPageUrl() }}" rel="prev">Anterior</a></li>
            @endif

            {{-- Next Page Link --}}
            @if ($paginator->hasMorePages())
                <li class="btn btn-outline-secondary mx-1"><a class="text-secondary text-decoration-none" href="{{ $paginator->nextPageUrl() }}" rel="next">Siguiente</a></li>
            @else
                <li class="btn btn-secondary disabled mx-1" aria-disabled="true"><span>Siguente</span></li>
            @endif
        </ul>
    </nav>
@endif
