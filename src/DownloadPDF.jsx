import { useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs, Worker as PdfWorker } from 'react-pdf-viewer';
import { GroceryList } from './GroceryList';
import { SelectedRecipeList } from './RecipeList';
import { GeneratePDF } from './GeneratePDF';


pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const DownloadPDF = ({ groceryList, setGroceryList, recipeList }) => {
    
        const downloadPDF = async () => {
            try {
                // Use PdfWorker from react-pdf-viewer
                const pdfWorker = new PdfWorker({ workerUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js` });

                // Render PDF using the Worker
                await pdfWorker.load(
                    <>
                        <GeneratePDF groceryList={groceryList} recipeList={recipeList}/>
                       
                    </>
                   
                );

                // Create a download link
                const blob = await pdfWorker.getBlob();
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'parasitic-draw-report.pdf';
                link.click();
            } catch (error) {
                console.error(`Error rendering PDF: ${error}`);
            }
        };
        useEffect(() => {
        downloadPDF();
    }, [groceryList, recipeList]);

    return (
        <div>
            <button onClick={downloadPDF}><span className="material-symbols-outlined">picture_as_pdf</span></button>
        </div>
    );
};
