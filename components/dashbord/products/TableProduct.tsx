import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import EmptyProduct from "./EmptyProduct";
import Link from "next/link";

import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContener";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Building2,
  Calendar,
  DollarSign,
  Package,
  Plus,
  Settings,
  Star,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { deleteProductAction } from "@/utils/actions";

import { Badge } from "@/components/ui/badge";
import { Products } from "@/utils/Type";
function TableProduct({ products }: { products: Products[] }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Package className="h-6 w-6 text-black dark:text-white" />
            Products Management
            <Badge variant="secondary" className="ml-2 animate-pulse">
              <BarChart3 className="h-3 w-3 mr-1" />
              {products.length} products
            </Badge>
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button size="sm" className="flex items-center gap-2  ">
              <Plus className="h-4 w-4" />
              <Link
                href="/dashbord/products/create"
                className="capitalize w-full"
              >
                Create Product
              </Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Filters */}

        {/* Table */}
        <div className="rounded-md border"></div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 p-0 h-auto font-medium hover:bg-transparent"
                >
                  <Package className="h-4 w-4" />
                  Product Name
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 p-0 h-auto font-medium hover:bg-transparent"
                >
                  <Building2 className="h-4 w-4" />
                  Company
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 p-0 h-auto font-medium hover:bg-transparent"
                >
                  <DollarSign className="h-4 w-4" />
                  Price
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <Settings className="h-4 w-4" />
                  Action
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => {
              const { id: productId, name } = product;
              return (
                <TableRow
                  key={product.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors animate-in fade-in duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12 rounded-lg">
                          <AvatarImage src={product.image} alt={name} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"></AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ({product.reviews.length ?? 0})reviews
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Package className="h-3 w-3" />
                          Stock: {product.price / 10}
                          <span className="ml-2 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {product.createdAt.toUTCString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {product.company}
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                          {formatCurrency(product.price)}
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Link href={`/dashbord/products/${productId}/edit`}>
                        <IconButton actionType="edit" />
                      </Link>
                      <DeleteProduct productId={productId} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {products.length === 0 && <EmptyProduct />}
      </CardContent>
    </Card>
  );
}
function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });
  return (
    <FormContainer className="" action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
export default TableProduct;
